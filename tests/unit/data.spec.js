import data from '@/data';

describe('data', () => {
  const {
    experience: { clients, employers, skills, projects },
  } = data;

  function findSkillLevel(skill, acc = 0) {
    const [parentType, parentId] = skill.parent.split('.');
    return parentType === 'categories'
      ? acc
      : findSkillLevel(data.experience[parentType][parentId], acc + 1);
  }

  describe('projects', () => {
    describe.each(Object.entries(projects))('%s', (key, project) => {
      it('should have a valid clientId', () => {
        expect(clients).toHaveProperty(project.clientId);
      });

      it('should have a valid employerId', () => {
        expect(employers).toHaveProperty(project.employerId);
      });

      // TODO enabled
      xdescribe.each(project.skills)(
        'should have valid skill id %s',
        (skillId) => {
          expect(data.experience.skills).toHaveProperty(skillId);
        },
      );
    });
  });

  describe('skills', () => {
    const allProjectSkills = Object.values(projects).reduce(
      (acc, { skills: projectSkills }) => new Set([...acc, projectSkills]),
      new Set(),
    );

    describe.each(Object.entries(skills))('%s', (key, skill) => {
      if (skill.legacy === true) {
        it('should have no score', () => {
          expect(skill).not.toHaveProperty('score');
        });
      } else {
        it('should have a score', () => {
          expect(skill).toHaveProperty('score', expect.any(Number));
        });
      }

      it('should have an existing parent', () => {
        expect(data.experience).toHaveProperty(skill.parent);
      });

      if (skill.score != null && skill.score > 0) {
        it('should have a score greater than 5', () => {
          expect(skill.score).toBeGreaterThanOrEqual(5);
        });
      }

      it('should not nest more than 2 levels', () => {
        expect(findSkillLevel(skill)).not.toBeGreaterThan(2);
      });

      // TODO enabled
      xit('is used in a project', () => {
        expect(allProjectSkills).toInclude(key);
      });
    });
  });
});

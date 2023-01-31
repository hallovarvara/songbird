import { handleClassnames } from './handle-classnames';

describe('handleClassnames', () => {
  it('returns "undefined" if no classnames are passed', () => {
    expect(handleClassnames()).toBeUndefined();
  });

  it('returns "undefined" if "undefined" variable is passed', () => {
    const classnames = undefined;
    expect(handleClassnames(classnames)).toBeUndefined();
  });

  it('returns className-string if strings are passed', () => {
    expect(handleClassnames('first', 'main-class', 'mod')).toBe(
      'first main-class mod',
    );
  });

  it('returns className-string if strings and objects of modifiers are passed', () => {
    expect(
      handleClassnames('first', 'main-class', {
        mod: true,
        removed: false,
        // @ts-ignore
        num: 21,
      }),
    ).toBe('first main-class mod');
  });

  it('returns className-string if strings and objects of modifiers are passed randomly', () => {
    expect(
      handleClassnames(
        { 'strange-classname': true, removed__part: false },
        'first',
        '',
        { something: true },
        'main-class',
        'two in one',
        {
          mod: true,
          removed: false,
        },
      ),
    ).toBe('strange-classname first something main-class two in one mod');
  });
});

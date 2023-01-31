type ClassnameT = string | undefined;
export type ClassnamesT = ClassnameT | { [key: string]: boolean | undefined };

export const handleClassnames = (
  ...classNames: Array<ClassnamesT>
): ClassnameT => {
  if (classNames.length === 0) {
    return undefined;
  }

  const classNamesArray = classNames.reduce((array, classname) => {
    if (classname === undefined) {
      return array;
    }

    if (typeof classname === 'object') {
      const entries = Object.entries(classname);

      for (let i = 0; i < entries.length; i += 1) {
        const [key, shouldBeAdded] = entries[i];

        if (typeof shouldBeAdded === 'boolean' && shouldBeAdded) {
          array.push(key);
        }
      }
    }

    if (typeof classname === 'string' && classname.length > 0) {
      if (classname.includes(' ')) {
        array.push(...classname.split(' '));
      } else {
        array.push(classname);
      }
    }

    return array;
  }, [] as Array<string>);

  if (classNamesArray.length === 0) {
    return undefined;
  }

  return classNamesArray.join(' ').trim();
};

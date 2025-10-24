class StringHelper {
  removeAccents(str: string): string {
    /**
     * Parse a localized number to a float.
     * @param {string} stringNumber - the localized number
     * @param {string} locale - [optional] the locale that the number is represented in. Omit this parameter to use the current locale.
     */
    const AccentsMap = [
      'aàảãáạăằẳẵắặâầẩẫấậ',
      'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
      'dđ',
      'DĐ',
      'eèẻẽéẹêềểễếệ',
      'EÈẺẼÉẸÊỀỂỄẾỆ',
      'iìỉĩíị',
      'IÌỈĨÍỊ',
      'oòỏõóọôồổỗốộơờởỡớợ',
      'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
      'uùủũúụưừửữứự',
      'UÙỦŨÚỤƯỪỬỮỨỰ',
      'yỳỷỹýỵ',
      'YỲỶỸÝỴ',
    ];
    for (let i = 0; i < AccentsMap.length; i++) {
      const re = new RegExp('[' + AccentsMap[i].substring(1) + ']', 'g');
      const char = AccentsMap[i][0];
       
      str = str.replace(re, char).toUpperCase() as string;
    }
    return str;
  }

  compareString = (a: string, b: string): number => {
    return a.localeCompare(b);
  };

  spliceSlice(str: string, index: number, count: number, add: string) {
    // We cannot pass negative indexes directly to the 2nd slicing operation.
    if (index < 0) {
       
      index = str.length + index;
      if (index < 0) {
         
        index = 0;
      }
    }

    return str.slice(0, index) + (add || '') + str.slice(index + count);
  }
}

export const stringHelper = new StringHelper();

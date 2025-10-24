class Validate {
  isEmail(email: string): boolean {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  }
  isPhone(phone: string): boolean {
    return /^[0-9]{10}$/.test(phone);
  }
  isPassword(password: string): boolean {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  }
  isName(name: string): boolean {
    return /^[a-zA-Z\s]+$/.test(name);
  }
  isUrl(url: string): boolean {
    return /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\\/\w .-]*)*\/?$/.test(url);
  }
  isDate(date: string): boolean {
    return /^(0?[1-9]|[12][0-9]|3[01])[\\/-](0?[1-9]|1[012])[\\/-]\d{4}$/.test(date);
  }
  isTime(time: string): boolean {
    return /^(0?[1-9]|1[0-2]):[0-5][0-9] [APap][mM]$/.test(time);
  }
}

export const validateHelper = new Validate();

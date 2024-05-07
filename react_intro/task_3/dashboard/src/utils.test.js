import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

//getFullYear test
describe('getFullYear function', () => {
  it('should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
}
);

//getFooterCopy test
describe('getFooterCopy function', () => {
  it('should return "Holberton School" when argument is true', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });

  it('should return "Holberton School main dashboard" when argument is false', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  }
  );
}
);

//getLatestNotification test
describe('getLatestNotification function', () => {
  it('should return the correct string', () => {
    const notificationString = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toEqual(notificationString);
  });
}
);

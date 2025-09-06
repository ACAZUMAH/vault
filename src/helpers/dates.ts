import dayjs from "dayjs";

export const formatDate = (date: Date) => {
  return dayjs(new Date(date)).format("MMMM D, YYYY");
};

export const getPreviousYearDate = (recentDate: Date) => {
  const previousYear = new Date(recentDate);
  previousYear.setFullYear(previousYear.getFullYear() - 1);
  return formatDate(previousYear);
};

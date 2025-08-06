export const hasPurchased = (slug) => {
  const purchased = JSON.parse(localStorage.getItem('purchasedCourses') || '[]');
  return purchased.includes(slug);
};

export const markAsPurchased = (slug) => {
  const purchased = JSON.parse(localStorage.getItem('purchasedCourses') || '[]');
  if (!purchased.includes(slug)) {
    purchased.push(slug);
    localStorage.setItem('purchasedCourses', JSON.stringify(purchased));
  }
};

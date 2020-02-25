module.exports = new Array(10).fill(null).map((x, index) => ({
  id: `${index}`,
  name: `User ${index}`,
  description: `Description ${index}`,
  createdAt: new Date(index),
  estimate: index,
  status: index,
  dueDate: new Date(index),
  labels: [`${index}`],
}));

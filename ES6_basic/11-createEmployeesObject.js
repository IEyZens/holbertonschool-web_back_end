export default function createEmployeesObject(departmentName, employees) {
  const manyEmployees = {
    [departmentName]: employees,
  };

  return manyEmployees;
}

import axios from "axios";

const ADD_EMPLOYEE_API_URL = "http://localhost:9091/api/v1/employees";
class EmployeeService {
  saveEmployee(employee) {
    return axios.post(ADD_EMPLOYEE_API_URL, employee);
  }
  showEmployees() {
    return axios.get(ADD_EMPLOYEE_API_URL);
  }
  deleteEmployee(id) {
    return axios.delete(ADD_EMPLOYEE_API_URL + "/" + id);
  }
  getEmployeeById(id) {
    return axios.get(ADD_EMPLOYEE_API_URL + "/" + id);
  }
  updateEmployee(employee, id) {
    return axios.put(ADD_EMPLOYEE_API_URL + "/" + id, employee);
  }
}
export default new EmployeeService();

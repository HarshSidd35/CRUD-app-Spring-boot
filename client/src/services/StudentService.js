import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/student";

class StudentService {
  saveStudent(student) {
    return axios.post(STUDENT_API_BASE_URL, student);
  }

  getStudents() {
    return axios.get(STUDENT_API_BASE_URL);
  }

  deleteStudent(id) {
    return axios.delete(STUDENT_API_BASE_URL + "/" + id);
  }

  getStudentById(id) {
    return axios.get(STUDENT_API_BASE_URL + "/" + id);
  }

  updateStudent(student, id) {
    return axios.put(STUDENT_API_BASE_URL + "/" + id, student);
  }
}

export default new StudentService();

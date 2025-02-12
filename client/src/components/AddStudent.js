import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentService from "../services/StudentService";

const AddStudent = () => {
  const [student, setStudent] = useState({
    id: "",
    firstName: "",
    lastName: "",
    marks1: 0,
    marks2: 0,
    marks3: 0,
    marks4: 0,
    total: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setStudent({ ...student, [e.target.name]: value });
  };

  const saveStudent = (e) => {
    e.preventDefault();
    student.total =
      student.marks1 + student.marks2 + student.marks4 + student.marks3;
    StudentService.saveStudent(student)

      .then((response) => {
        console.log(response);

        navigate("/studentList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setStudent({
      id: "",
      firstName: "",
      lastName: "",
      marks1: 0,
      marks2: 0,
      marks3: 0,
      marks4: 0,
      total: 0,
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Student</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={student.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={student.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Marks 1
          </label>
          <input
            type="number"
            name="marks1"
            value={student.marks1}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Marks 2
          </label>
          <input
            type="number"
            name="marks2"
            value={student.marks2}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Marks 3
          </label>
          <input
            type="number"
            name="marks3"
            value={student.marks3}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Marks 4
          </label>
          <input
            type="number"
            name="marks4"
            value={student.marks4}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveStudent}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
          >
            Save
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;

import fetch from "unfetch";

export const getAllStudents = () => fetch("/api/v1/students"); 
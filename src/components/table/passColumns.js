import { FaStar } from "react-icons/fa";

export const passColumns = [
  { Header: "Название", accessor: "name" },
  { Header: "URL", accessor: "url" },
  { Header: "В избранное", Cell: () => <FaStar /> },
];

import { useQuery } from "@tanstack/react-query";

// Simulate an API call returning Indian user data
const fetchUsers = async () => {
  return [
    { id: 1, name: "Ravi Kumar", email: "ravi.kumar@gmail.com" },
    { id: 2, name: "Priya Sharma", email: "priya.sharma@gmail.com" },
    { id: 3, name: "Amit Verma", email: "amit.verma@gmail.com" },
    { id: 4, name: "Neha Mehta", email: "neha.mehta@gmail.com" },
    { id: 5, name: "Rajesh Singh", email: "rajesh.singh@gmail.com" },
    { id: 6, name: "Divya Kapoor", email: "divya.kapoor@gmail.com" },
    { id: 7, name: "Anil Reddy", email: "anil.reddy@gmail.com" },
    { id: 8, name: "Sneha Iyer", email: "sneha.iyer@gmail.com" },
    { id: 9, name: "Manoj Joshi", email: "manoj.joshi@gmail.com" },
    { id: 10, name: "Kavita Nair", email: "kavita.nair@gmail.com" },
  ];
};

const useFetchData = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 60000,
    refetchOnWindowFocus: true,
  });
};

export default useFetchData;

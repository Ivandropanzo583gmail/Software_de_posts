"use client";

import { Trash, PlusCircle, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

type User = {
  id: number;
  name: string;
  email: string;
  status: string;
  avatar: string;
};

type ApiUser = {
  id: number;
  name: string;
  email: string;
};

export default function Client() {
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<ApiUser[]>("https://jsonplaceholder.typicode.com/users");
        const transformed = response.data.map((u): User => ({
          id: u.id,
          name: u.name,
          email: u.email,
          status: "Active",
          avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
        }));
        setUsers(transformed);
      } catch (error) {
        console.error("Erro ao buscar usuários da API:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleAddUser = () => {
    if (!form.name || !form.email) return;
    setLoading(true);
    setTimeout(() => {
      const newUser: User = {
        id: Date.now(),
        name: form.name,
        email: form.email,
        status: "Active",
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      };
      setUsers([newUser, ...users]);
      setForm({ name: "", email: "" });
      setLoading(false);
    }, 2000);
  };

  const handleUpdateUser = async () => {
    if (form.name.trim() === "" || form.email.trim() === "") {
      alert("Preencha os campos vazios");
      return;
    }

    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${selectedUserId}`, {
        name: form.name,
        email: form.email,
      });

      const updatedUsers = users.map((u) =>
        u.id === selectedUserId ? { ...u, name: form.name, email: form.email } : u
      );

      setUsers(updatedUsers);
      setSelectedUserId(null);
      setForm({ name: "", email: "" });
      alert("Usuário atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  const handleDeleteUser = (id: number) => {
    setLoading(true);
    setTimeout(() => {
      setUsers(users.filter((u) => u.id !== id));
      setLoading(false);
    }, 2000);
  };

  const handleDeleteAll = () => {
    setLoading(true);
    setTimeout(() => {
      setUsers([]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="font-[Geist] min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-4 sm:p-6 overflow-x-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">User Management</h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border border-gray-300 rounded px-3 py-2 w-full text-black"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border border-gray-300 rounded px-3 py-2 w-full text-black"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-4 w-full">
          <button
            onClick={selectedUserId ? handleUpdateUser : handleAddUser}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm disabled:opacity-50"
            disabled={loading}
          >
            <PlusCircle size={18} />
            {selectedUserId ? "Update User" : "Add User"}
          </button>
          <button
            onClick={handleDeleteAll}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm disabled:opacity-50"
            disabled={loading}
          >
            <Trash size={18} />
            Delete All
          </button>
        </div>

        {loading && (
          <div className="text-center text-gray-500 mb-4">
            Aguarde... processando ação
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Edit</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  <td className="flex items-center gap-3 px-4 py-4 whitespace-nowrap">
                    <Image
                      src={user.avatar}
                      alt={user.name}
                      width={36}
                      height={36}
                      className="w-9 h-9 rounded-full object-cover shrink-0"
                    />
                    <span className="font-medium truncate max-w-[150px]">{user.name}</span>
                  </td>
                  <td className="px-4 py-4 truncate max-w-[180px]">{user.email}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <button
                      className="text-blue-600 hover:text-blue-800 transition"
                      title="Edit user"
                      disabled={loading}
                      onClick={() => {
                        setSelectedUserId(user.id);
                        setForm({ name: user.name, email: user.email });
                      }}
                    >
                      <Pencil size={18} />
                    </button>
                  </td>
                  <td className="px-4 py-4">
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-600 hover:text-red-800 transition"
                      title="Delete user"
                      disabled={loading}
                    >
                      <Trash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && !loading && (
                <tr>
                  <td colSpan={5} className="text-center text-gray-500 py-6">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

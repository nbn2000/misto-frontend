import Link from "next/link"
import { IoMdAddCircle } from "react-icons/io";


const AdminSidebar = () => {
    return (
        <aside className="w-64 h-screen float-left" aria-label="Sidebar">
            <div className="fixed top-0 w-64 h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link href="/admin/add-card" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <IoMdAddCircle className="text-gray-500 text-3xl hover:text-gray-900" />
                            <span className="ms-3">Add new card</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default AdminSidebar
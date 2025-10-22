import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store.ts';

// Import icons từ thư viện react-icons (cài đặt nếu chưa: npm install react-icons)
import {
  FaChartBar, // Doanh thu
  FaClipboardList, // Thống kê đơn
  FaServer, // Hạ tầng
  FaMoneyCheck, // Lương
  FaWarehouse, // Kho
  FaCog, // Cài đặt
  FaUsers, // Nhân sự
  FaFileInvoice, // Hóa đơn
  FaTruck, // Phân phối
  FaHeart, // Cảm ơn
} from 'react-icons/fa';

const Menu: React.FC = () => {
  const permissions = useSelector((state: RootState) => state.auth.permissions);

  if (!permissions) return null;

  // Map tên menu với icon tương ứng (bạn có thể chỉnh icon cho phù hợp)
  const iconMap: { [key: string]: React.ReactElement } = {
    'Doanh thu': <FaChartBar className="inline-block" />,
    'Thực đơn': <FaClipboardList className="inline-block" />,
    'Hạ tầng': <FaServer className="inline-block" />,
    Lương: <FaMoneyCheck className="inline-block" />,
    Kho: <FaWarehouse className="inline-block" />,
    'Cài đặt': <FaCog className="inline-block" />,
    'Nhân sự': <FaUsers className="inline-block" />,
    'Hóa đơn': <FaFileInvoice className="inline-block" />,
    'Phân phối': <FaTruck className="inline-block" />,
    'Cảm ơn': <FaHeart className="inline-block" />,
  };

  return (
    <nav className="grid grid-cols-5 gap-4">
      {permissions.menus.map((menu) => (
        <Link
          key={menu.name}
          to={menu.url}
          className="hover:text-blue-500 text-center flex items-center justify-center"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-[90px] h-[90px] bg-white rounded-2xl items-center justify-center flex text-3xl">
              <div className="text-black leading-[0]">{iconMap[menu.name] || null}</div>
            </div>
            <div className="text-white">{menu.name}</div>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Menu;

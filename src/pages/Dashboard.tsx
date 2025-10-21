import Menu from '../components/Menu.tsx';
import { DualAxes } from '@ant-design/plots'; // Sử dụng DualAxes cho biểu đồ cột + đường

export default function Dashboard() {
  // Dữ liệu cho biểu đồ
  const data = [
    { date: '2025-10-15', nhap: 1200000, xuat: 800000 },
    { date: '2025-10-16', nhap: 1500000, xuat: 950000 },
    { date: '2025-10-17', nhap: 900000, xuat: 1100000 },
    { date: '2025-10-18', nhap: 1800000, xuat: 700000 },
    { date: '2025-10-19', nhap: 1600000, xuat: 1300000 },
    { date: '2025-10-20', nhap: 2100000, xuat: 1500000 },
    { date: '2025-10-21', nhap: 1750000, xuat: 1600000 },
    { date: '2025-10-22', nhap: 1100000, xuat: 900000 },
    { date: '2025-10-23', nhap: 1300000, xuat: 1400000 },
    { date: '2025-10-24', nhap: 1900000, xuat: 1100000 },
  ];

  // Cấu hình biểu đồ
  const config = {
    data,
    xField: 'date',
    legend: false, // Ẩn chú thích (legend)
    slider: { x: true },
    children: [
      // Đường Nhập (Màu xanh lá)
      {
        type: 'line',
        yField: 'nhap',
        style: {
          stroke: '#22C55E', // Màu xanh lá
          lineWidth: 2,
        },
        axis: {
          y: {
            // Ẩn trục Y bên trái để cho sạch
            grid: null,
            title: null,
            label: null,
          },
        },
      },
      // Đường Xuất (Màu đỏ)
      {
        type: 'line',
        yField: 'xuat',
        style: {
          stroke: '#EF4444', // Màu đỏ
          lineWidth: 2,
        },
        axis: {
          y: {
            // Ẩn trục Y bên phải
            position: 'right',
            grid: null,
            title: null,
            label: null,
          },
        },
      },
    ],
    // Ẩn các chấm (tooltip) trên trục X
    height: 300,
  };

  return (
    <div className="flex flex-col w-[1286px] h-[580px] gap-6 justify-between">
      <div className="mx-auto py-8">
        <div className="flex font-bold text-4xl mb-4">
          <h1 className="text-primary-500">ShineWay</h1> -<h1>Hệ thống hỗ trợ vận hành nhà hàng</h1>
        </div>
      </div>
      <div className="flex-1 bg-[#5296E5] rounded-xl">
        <div className="flex gap-6 p-[59px] h-full">
          <div className="w-[372px]">
            <h2 className="text-white text-lg font-medium mb-4">Thống kê Menu</h2>
            <div className="bg-white rounded-md p-4 shadow-md">
              {' '}
              {/* Thêm lớp nền trắng và shadow */}
              <DualAxes {...config} />
            </div>
          </div>
          <div className="border-r border-gray-300 h-full ml-2"></div>
          <div className="flex flex-col gap-6 text-white text-lg font-medium flex-1">
            <div>Tất cả ứng dụng</div>
            <div className="flex-1">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

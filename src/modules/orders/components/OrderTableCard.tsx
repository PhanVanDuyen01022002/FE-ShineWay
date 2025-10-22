import { Select, Tag } from 'antd';
import { FLOOR_DATA, TABLE_DATA } from '../constants/index.ts';
import { useState } from 'react';

function OrderTableCard() {
  const [floorSelected, setFloorSelected] = useState('1');
  const [tableSelected, setTableSelected] = useState<{ id: string; status: string } | null>(null);

  const handleChange = (value: string) => {
    setFloorSelected(value);
  };

  const filteredFloortables = TABLE_DATA.filter((item) => item.floor === floorSelected);
  return (
    <div className="px-9 pt-[22px] pb-[70px] bg-white rounded-[24px] shadow-sm border border-gray-100">
      {/* HEADER */}
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <div>
          <span className="block text-[24px] font-bold">Chọn bàn</span>
          <span>
            Ca:{' '}
            <Tag bordered={false} color="#FF9D00" className="rounded-xl">
              Tối
            </Tag>
          </span>
        </div>
        <div>
          <Select
            defaultValue={floorSelected}
            style={{ width: 120 }}
            onChange={handleChange}
            options={FLOOR_DATA}
            className="shadow-md rounded-md"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="mt-[30px]">
        <div className="h-[24px] mb-[32px] flex justify-between">
          <div className="flex gap-[30px]">
            <div className="flex font-bold text-base gap-[10px]">
              <span>Đang trống: </span>{' '}
              <div className="w-6 h-6 bg-primary-450 rounded-full font-medium flex items-center justify-center text-white text-sm">
                {TABLE_DATA.filter((item) => item.status === 'empty').length}
              </div>
            </div>

            <div className="flex font-bold text-base gap-[10px]">
              <span>Đang dùng: </span>{' '}
              <div className="w-6 h-6 bg-gray-200 rounded-full font-medium flex items-center justify-center text-black text-sm">
                {TABLE_DATA.filter((item) => item.status === 'in_use').length}
              </div>
            </div>

            <div className="flex font-bold text-base gap-[10px]">
              <span>Đặt trước: </span>{' '}
              <div className="w-6 h-6 bg-[#F90000] rounded-full font-medium flex items-center justify-center text-white text-sm">
                {TABLE_DATA.filter((item) => item.status === 'booked').length}
              </div>
            </div>
          </div>

          <div className="flex font-bold text-base gap-[10px]">
            <span>Đang chọn: </span>{' '}
            {tableSelected ? (
              <div
                className={`w-6 h-6 bg-primary-450 rounded-full font-medium flex items-center justify-center text-white text-sm ${
                  tableSelected.status === 'empty'
                    ? 'bg-primary-450'
                    : tableSelected.status === 'in_use'
                    ? 'bg-gray-200 !text-black'
                    : 'bg-[#F90000]'
                }`}
              >
                {tableSelected?.id}
              </div>
            ) : (
              <div className="w-6 h-6"></div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-8 gap-1">
          {filteredFloortables.map(({ id, status }) => (
            <div
              key={id}
              className={`aspect-square flex items-center justify-center rounded-md ${
                status === 'empty' ? 'bg-primary-450' : status === 'in_use' ? 'bg-gray-200' : 'bg-[#F90000]'
              } ${id === tableSelected?.id && 'border-2 border-dashed border-black'}`}
              onClick={() => setTableSelected({ id, status })}
            >
              {id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderTableCard;

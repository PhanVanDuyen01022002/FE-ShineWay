import { Button, Card, Image, Input } from 'antd';
import { PlusIcon, Search } from 'lucide-react';
import { CATEGORIES_ORDER_DATA, MENU_DATA } from '../constants/index.ts';
import ChevronLeftCustom from '../../../assets/logos/chevron-left-custom.svg?react';
import { useRef, useState } from 'react';

function OrderMenuCard() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const menuContainerRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (key: string) => {
    setActiveCategory(key);
    // Xử lý cuộn về left khi thực hiện chọn loại
    if (menuContainerRef.current) {
      menuContainerRef.current.scrollLeft = 0;
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const scrollLeft = () => {
    if (menuContainerRef.current) {
      menuContainerRef.current.scrollLeft -= 400; //Mỗi lần nhảy 400px
    }
  };

  const scrollRight = () => {
    if (menuContainerRef.current) {
      menuContainerRef.current.scrollLeft += 400;
    }
  };

  const filteredMenu = MENU_DATA.filter((item) => {
    const categoryMatch = activeCategory === 'all' || item.categoryKey === activeCategory;
    const searchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });
  return (
    <Card
      className="w-full rounded-[24px]"
      title="Danh mục các món"
      extra={
        <div className="w-[275px] h-[31px] bg-white rounded-[24px] flex gap-[7px] px-[11px] items-center">
          <Search size={24} />
          <Input
            placeholder="Nhập tên món ăn...."
            className="h-[17px] px-1 border-none !shadow-none"
            onChange={handleSearch}
          />
        </div>
      }
      styles={{
        header: { height: 63, background: '#5296E5' },
        title: { fontSize: 24, fontWeight: 'bold', paddingTop: 9, paddingBottom: 26, height: 63, color: 'white' },
        extra: { height: '100%', paddingTop: 12 },
        body: {
          padding: '22px 30px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          backgroundColor: '#fdfdf',
        },
      }}
    >
      <div className="flex gap-[18px]">
        {CATEGORIES_ORDER_DATA.map((category) => (
          <Button
            key={category.key}
            className={`border-2 border-primary-450 rounded-[14px] text-base font-semibold  ${
              category.key === activeCategory
                ? 'bg-primary-450 text-white hover:!bg-primary-450 hover:!text-white'
                : 'text-primary-450'
            }`}
            onClick={() => handleCategoryClick(category.key)}
          >
            {category.label}
          </Button>
        ))}
      </div>

      <div className="flex justify-between">
        <ChevronLeftCustom onClick={scrollLeft} />
        <ChevronLeftCustom onClick={scrollRight} className="rotate-180" />
      </div>

      <div ref={menuContainerRef} className="overflow-x-auto w-full min-w-0 scroll-smooth scroll-hidden">
        <div className="flex gap-9 min-w-fit pb-2">
          {filteredMenu.length === 0 ? (
            <p className="text-gray-500 w-full text-center py-5">Không tìm thấy món ăn nào khớp với tiêu chí.</p>
          ) : (
            filteredMenu.map(({ description, id, image, name, prices }) => (
              <div key={id} className="w-[153px] rounded-[20px] bg-white shadow-md">
                <Image src={image} preview={false} className="rounded-[20px]" />

                <div className="px-2.5 pb-2.5">
                  <span className="text-sm font-medium">{name}</span>
                  <span className="text-xs opacity-[50%] block h-4">{description}</span>
                  <div className="mt-2 flex justify-between ">
                    <span className="text-base font-medium text-[#1A72DD]">GNF {prices.GNF}</span>
                    <div className="w-8 h-7 bg-gradient-to-r from-[#1A72DD] to-[#0D62CA] rounded-[20px] text-white flex items-center justify-center">
                      <PlusIcon size={16} strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Card>
  );
}

export default OrderMenuCard;

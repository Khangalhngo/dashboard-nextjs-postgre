import { Table } from '@/components/page';
import React from 'react';

const Page = () => {
  const columns = [{ title: "Top Channels", dataIndex: "name" }, { title: "Users", dataIndex: "users" }, { title: "Percentage", dataIndex: "percentage" }];

  const dataSource = [
    {
      name: "Organic Search",
      users: "5,649",
      percentage: "30%"
    },
    {
      name: "Referral",
      users: "4,025",
      percentage: "24%"
    },
    // ... more entries
  ];
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
      <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">Хэрэглэгчдийн жагсаалт</h3>
      <div className="block w-full overflow-x-auto">
        <Table columns={columns} dataSource={dataSource} />
      </div>
    </div>
  );
}

export default Page;

interface NoDataProps {
  message?: string;
}

const NoData = ({ message = "No data available" }: NoDataProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-600 mb-4">No Data</h2>
        <p className="text-gray-500">{message}</p>
      </div>
    </div>
  );
};

export default NoData; 
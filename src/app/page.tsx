
export default function Home() {
  return (
    <>
    <div className="light">
        <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between items-center py-7">
              <div>
                <h1 className="font-bold text-3xl text-bw-text">Social Media Dashboard</h1>
                <p className="text-text font-bold">Total Followers: 23,004</p>
              </div>
              <div className="flex items-center space-x-5">
                <p className="text-text font-bold text-sm">Dark Mode</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
              </div>
            </div>
        </div>
    </div>
    </>
  );
}

const Client = () => {
    return (
        <div className="bg-white pb-12 lg:px-20 space-y-6">
            <div className="w-full flex flex-col justify-start mx-auto px-20 pt-8">
                {/* profile picture */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-md">
                    <img src={"/assets/Baby.jpg"} alt="profile img" width={60} className="rounded-full w-full h-full" />
                </div>
                <p className="inline-flex gap-4"><span className="font-semibold">NAME:</span>Dev Sokijaja</p>
                <p className="inline-flex gap-4"><span className="font-semibold">ADDRESS:</span>USA-NEW YORK CITY 21ST</p>
                {/* <button className="border-2 px-4 py-2 text-[14px] border-[#07425b] items-start w-40 rounded-lg hover:bg-[#07425b16] focus:border-0 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-inherit text-[#07425b]">Copy Info</button> */}
            </div>
            <div className="w-full flex md:flex-row flex-col mx-auto justify-center gap-6">
                {/* Balance section */}
                <div className="bg-white basis-1/3 shadow-md shadow-slate-200 rounded-md p-6">
                    <p className="text-center text-[#07425b] font-semibold">ACCOUNT BALANCE</p>
                    <h4 className="text-center font-semibold">53043 USD</h4>
                </div>
                <div className="bg-white basis-1/2 shadow-md rounded-md shadow-slate-200 p-6 space-y-12">
                    <div className="w-3/4 ml-4">
                        <p className="text-[#07425b] font-semibold">TOTAL LENT</p>
                        <h4 className="font-semibold">53043 USD</h4>
                    </div>
                    <div className="w-3/4 ml-4">
                        <p className="text-[#07425b] font-semibold">TOTAL LOAN</p>
                        <h4 className="font-semibold">543 USD</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Client
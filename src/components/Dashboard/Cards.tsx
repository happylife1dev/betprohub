import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

function Cards() {
    return (
        <>
            <div className="flex items-center rounded-sm border border-stroke bg-whiten shadow-inner py-2  px-2 dark:border-strokedark dark:bg-boxdark leading-1">
                <h4 className="font-bold text-black dark:text-white">Credit</h4>
                <MdOutlineKeyboardDoubleArrowRight className="ml-2 dark:text-white" />
                <h4 className="font-bold ml-2 dark:text-white">100</h4>
            </div>
            <div className="flex items-center rounded-sm border border-stroke bg-whiten shadow-inner py-2  px-2 dark:border-strokedark dark:bg-boxdark leading-1">
                <h4 className="font-bold text-black dark:text-white">Balance</h4>
                <MdOutlineKeyboardDoubleArrowRight className="ml-2 dark:text-white" />
                <h4 className="font-bold ml-2 dark:text-white">209</h4>
            </div>
            <div className="flex items-center rounded-sm border border-stroke bg-whiten shadow-inner py-2  px-2 dark:border-strokedark dark:bg-boxdark leading-1">
                <h4 className="font-bold text-black dark:text-white">Liable</h4>
                <MdOutlineKeyboardDoubleArrowRight className="ml-2 dark:text-white" />
                <h4 className="font-bold ml-2 dark:text-white">0</h4>
            </div>
            <div className="flex items-center rounded-sm border border-stroke bg-whiten shadow-inner py-2  px-2 dark:border-strokedark dark:bg-boxdark leading-1">
                <h4 className="font-bold text-black dark:text-white">Active Bets </h4>
                <MdOutlineKeyboardDoubleArrowRight className="ml-2 dark:text-white" />
                <h4 className="font-bold ml-2 dark:text-white">0</h4>
            </div>
        </>
    )
}

export default Cards
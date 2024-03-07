import Alderney from '../images/footer-logos/alderney-light.min.svg';
import Gambling from '../images/footer-logos/ukgc-light.min.svg';
import Gamecare from '../images/footer-logos/gamecare-light.min.svg';
import Gamstop from '../images/footer-logos/gamstop-light.min.svg';
import Taketimetothink from '../images/footer-logos/taketimetothink-light.min.svg';
import Plus from '../images/footer-logos/18plus-light.min.svg';
import takeTimeH from '../images/footer-logos/take-time-to-think_h-group.min.svg';
import takeTimeV from '../images/footer-logos/take-time-to-think_v-group.min.svg';
import Betfair from '../images/footer-logos/betfair-logo.svg';

function Footer() {
  return (
    <>
        <footer className="bg-boxdark shadow-lg -mb-0.5">
            <div className="bg-primaryY flex items-center justify-center md:py-6 py-4">
                <a href="#">
                    <img src={takeTimeH} className='md:block hidden' alt="" />
                    <img src={takeTimeV} className='block md:hidden w-28' alt="" />
                </a>
            </div>
            <div className="text-stroke text-center p-3">
                <div className="flex flex-col md:gap-2.5 gap-3">
                    <div>
                        <h1 className="text-4xl md:text-5xl uppercase break-all">Betrpohub.com</h1>
                        <h4 className="text-xl md:text-2xl">Elevate your betting betting experience</h4>
                    </div>
                    <p className='text-sm'>BetProHub is a cutting-edge peer-to-peer betting exchange designed for savvy bettors looking for added value. With substantial liquidity and minimal commissions, BetProHub guarantees optimal returns for its users.</p>
                    <p className='text-sm'>Explore superior odds, a user-friendly interface, and responsive customer support for further assistance.</p>
                    <div className="flex gap-3 items-center justify-center pb-3">
                        <div className="text-center">
                            <h6 className='text-xl md:text-2xl'>Contact us at</h6>
                            <div className='text-sm'>General Inquiries: <a href="betprohub@gmail.com" className="underline"> info@betprohub.com</a></div>
                            <div className='text-sm'>Complaints : <a href="betprohub@gmail.com" className="underline"> Complaints@betprohub.com</a></div>
                        </div>
                    </div>
                </div>
                <div className="flex md:gap-4 gap-3 justify-center pb-3 items-center md:items-stretch flex-wrap">
                    <div className=" md:w-3/12 border-4 border-primaryY pt-2 p-3">
                        <h5 className='text-left text-stroke text-xl mb-3'>Safer Gambling</h5>    
                        <div className="flex flex-wrap md:gap-5 gap-2 items-center">
                            <a href="#" className=""><img src={Alderney} alt="" /></a>
                            <a href="#" className=""><img src={Gambling} alt="" /></a>
                            <a href="#" className=""><img src={Gamecare} alt="" /></a>
                            <a href="#" className=""><img src={Gamstop} alt="" /></a>
                            <a href="#" className=""><img src={Plus} alt="" /></a>
                            <a href="#" className=""><img src={Taketimetothink} alt="" /></a>
                        </div>
                    </div>
                    <div className="bg-primaryY md:w-1/12 py-3 px-2">
                        <h5 className='text-black text-xl mb-2'>Powered By</h5>                        
                        <a href="#" className=""><img src={Betfair} alt="" className='w-28 mx-auto' /></a>
                    </div>
                </div>
                <div className="border-t border-t-2 border-strokedark pt-3">
                    <ul className="flex justify-center  text-sm">
                        <li className="leading-1 border-r border-gray px-3">
                            <a href="#" className="underline">Terms & Conditions</a>
                        </li>
                        <li className="leading-1 px-3">
                            <a href="#" className="underline">About Us</a>
                        </li>
                    </ul>
                <div className="text-center pt-3 text-sm"><span className='block font-medium'>Copyright © 2024 BetProHub.com </span> All rights are reserved and protected by law</div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
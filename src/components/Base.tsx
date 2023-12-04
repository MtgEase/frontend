import Header from './Header.tsx';
import Bottom from './Bottom.tsx';


import MtgList from './MtgList.tsx';
import RoomList from './RoomList.tsx';
import Calendar from './Calender.tsx';
import Booking from '../pages/booking/index.tsx';
import BookingDetail from '../pages/booking/details.tsx'
import Room from '../pages/room/index.tsx'
import RoomDetail from '../pages/room/details.tsx'
import Approval from '../pages/approval/index.tsx'
import ApprovalDetail from '../pages/approval/detail.tsx'
import Cal from './callendar.tsx'


function App({ children }: any) {

  return (
    <>
      <Cal></Cal>
      <Header title={{ 'name': 'asdf', 'src': '/' }}></Header>
      {/* {children} */}

      <h1>MtgList</h1>
      <MtgList></MtgList>
      <h1>RoomList</h1>
      <RoomList></RoomList>
      <h1>Calendar</h1>
      <Calendar></Calendar>
      <h1>Booking</h1>
      <Booking></Booking>
      <h1>Booking</h1>
      <h1>Detail</h1>
      <BookingDetail></BookingDetail>
      <h1>Bottom</h1>
      <Bottom></Bottom>
      <h1>Room</h1>
      <Room></Room>
      <h1>Room</h1>
      <h1>Detail</h1>
      <RoomDetail></RoomDetail>
      <h1>Approval</h1>
      <Approval></Approval>
      <h1>Approval</h1>
      <h1>Detail</h1>
      <ApprovalDetail></ApprovalDetail>
      <Bottom></Bottom>
      <div className='flex flex-row-reverse'>
        <a className="w-16 h-16 bg-blue-500 text-white rounded-full"><span className='text-6xl'>+</span></a>
      </div>
    </>
  )
}

export default App
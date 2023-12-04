function Booking() {
    const mtg = {
        id: 0,
        title: '纳西妲发起的会议',
        applicant: 'Thomas',
        date: '2023-12-1',
        start: '10:00',
        end: '12:00',
        room: '大会议室（302）',
        discription: 'K-On!',
        status: 'draft',
        workflow: '',
    };

    let heading = '预约会议';

    return (
        <section className="text-left">
            <nav className="flex items-center justify-between">
                <button className="text-blue-500">&lt;</button>
                <h2>{heading}</h2>
                <button className="rounded-lg text-blue-500 hover:bg-blue-200 focus:outline-none">按钮</button>
            </nav>
            <ul className="list-none pl-0">
                <li className="border border-blue-500">
                    <b>会议主题</b><br/>
                    <input placeholder={mtg.title}></input>
                </li>
                <li>
                    <b>会议时间</b><br/>
                    {mtg.date} {mtg.start}-{mtg.end}
                </li>
                <li>
                    <b>会议室</b><br/>
                    {mtg.room}
                </li>
                <li>
                    <b>备注</b><br/>
                    <input placeholder={mtg.discription}></input>
                </li>
            </ul>
        </section>

    );
}

export default Booking



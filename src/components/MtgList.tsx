function MtgList() {
    const mtgs = [
        {
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
        },
        {
            id: 1,
            title: '芙宁娜发起的会议',
            applicant: 'Thomas',
            date: '2023-12-1',
            start: '10:00',
            end: '12:00',
            room: '大会议室（302）',
            discription: 'K-On!',
            status: 'draft',
            workflow: '',
        },
    ];

    const count = mtgs.length;
    let heading = ''
    if (count > 0) {
        heading = count + ' 场会议';
    }

    return (
        <section className="text-left">
            <h2>{heading}</h2>
            <ul className="list-none pl-0">
                {mtgs.map(mtg =>
                    <li className="rounded-lg bg-blue-300 bg-opacity-80 p-2 my-2">
                        <b>{mtg.title}</b><br />
                        {mtg.room} <br />
                        {mtg.date} {mtg.start}-{mtg.end}
                    </li>
                )}
            </ul>
        </section>

    );
}

export default MtgList



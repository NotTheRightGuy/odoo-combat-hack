



// // "use client";
// // import { useEffect } from "react"
// // import Box from '@mui/material/Box';
// // import { BarChart } from '@mui/x-charts/BarChart';

// // export default function UserAnalytics({ params }: { params: { userId: string } }) {

// //     useEffect(() => {
// //         fetch("http://localhost:3000/api/userAnalytics/" + params.userId)
// //             .then((res) => res.json())
// //             .then((data) => {
// //                 console.log(data)
// //             })
// //             .catch((err) => {
// //                 console.log(err)
// //             })
// //     }, [params.userId])

// //     const sample = [1, 10, 30, 50, 70, 90, 100];

// //     return (
// //         <Box sx={{ width: '100%', maxWidth: 500, display: 'flex', fontSize : 20 }}>
// //             <BarChart
// //                 series={[
// //                     { data: [3, 4, 1, 6, 5], label: 'Series A1' },
// //                 ]}
// //                 width={600}
// //                 height={350}
// //                 borderRadius={16}
// //                 // xAxis={[{ scaleType: 'band'}]}
// //                 yAxis={[{ scaleType: 'linear', tickLabelStyle : {fontSize: 15, } }]}
// //                 // xAxis={[{ scaleType: 'band' }]}

// //             />
// //         </Box>
// //     );
// // }
// "use client"
// import * as React from 'react';
// import { BarChart } from '@mui/x-charts/BarChart';

// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
// const xLabels = [
//     'Page A',
//     'Page B',
//     'Page C',
//     'Page D',
//     'Page E',
//     'Page F',
//     'Page G',
// ];

// export default function UserAnalytics({ params }: { params: { userId: string } }) {
    
//     const [userData, setUserdata] = React.useState([]);

//     React.useEffect (() => {
//         fetch("http://localhost:3000/api/userAnalytics/" + params.userId)
//             .then((res) => res.json())
//             .then((data) => {
//                 setUserdata(data)
//                 console.log(data)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }, [])

//     return (
//         <BarChart
//             width={500}
//             height={300}
//             series={[
//                 { data: pData },
//             ]}
//             xAxis={[{ data: xLabels,
//                 // data : userData.history.date 
//                 scaleType: 'band', disableTicks: true, disableLine: true }]}
//             yAxis={[{ data : pData, 
//                 // data: userData.history.borrowedBooks,
//                 disableLine: true, disableTicks: true, scaleType: 'linear'}]}
//             borderRadius={16}
//             disableAxisListener={true}

//         />
//     );
// }

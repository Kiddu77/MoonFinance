// // import { NextApiRequest, NextApiResponse } from 'next';

// // export default function handler(req: NextApiRequest, res: NextApiResponse) {
// //   if (req.method === 'GET') {
// //     res.status(200).json([
// //       {
// //         id: 'q1',
// //         question: 'Are you experienced investor or invested before?',
// //         options: [
// //           'Already have done few times',
// //           'Just getting started',
// //           'Have no experience',
// //           'Prefer not to say',
// //         ],
// //       },
// //       {
// //         id: 'q2',
// //         question: 'What is your preferred investment type?',
// //         options: ['Stocks', 'Real Estate', 'Crypto', 'Others'],
// //       },
// //     ]);
// //   } else {
// //     res.status(405).json({ message: 'Method Not Allowed' });
// //   }
// // }
// import { NextApiRequest, NextApiResponse } from 'next';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     const questions = [
//       {
//         id: '1',
//         question: 'Are you experienced investor or invested before?',
//         options: ['Yes, very experienced', 'Somewhat experienced', 'A few times', 'Not at all'],
//       },
//     ];

//     res.status(200).json(questions);
//   } else {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

import { Card, CardHeader, CardBody } from '@material-tailwind/react';

function Table({
  title,
  header1, header2, header3,
  row1_col1, row1_col2, row1_col3, row1_col4, row1_col5, row1_col6, row1_col7,
  row2_col1, row2_col2, row2_col3, row2_col4, row2_col5, row2_col6, row2_col7,
  row3_col1, row3_col2, row3_col3, row3_col4, row3_col5, row3_col6, row3_col7,
}) {
  return (
    <div className='px-10'>
      <Card className='px-5 shadow-2xl shadow-[#1a237e]'>
        <CardHeader className='bg-[#0097a7] shadow-lg shadow-[#0097a7]'>
          <div className='w-full h-16 flex justify-center items-center'>
            <h2 className='text-white text-xl font-bold'>{title}</h2>
          </div>
        </CardHeader>
        <CardBody>
          <div className='overflow-x-auto'>
            <table>
              <thead>
                <tr>
                  <th className='px-2 text-[#0097a7] align-middle border-b border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>
                    {header1}
                  </th>
                  <th className='px-2 text-[#0097a7] align-middle border-b border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>
                    {header2}
                  </th>
                  <th className='px-2 text-[#0097a7] align-middle border-b border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center'>
                    {header3}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row1_col1}
                  </th>
                  <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row2_col1}
                  </td>
                  <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row3_col1}
                  </td>
                </tr>
                <tr>
                  <th className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row1_col2}
                  </th>
                  <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row2_col2}
                  </td>
                  <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row3_col2}
                  </td>
                </tr>
                <tr>
                  <th className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row1_col3}
                  </th>
                  <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row2_col3}
                  </td>
                  <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row3_col3}
                  </td>
                </tr>
                <tr>
                  <th className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row1_col4}
                  </th>
                  <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row2_col4}
                  </td>
                  <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row3_col4}
                  </td>
                </tr>
                <tr>
                  <th className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row1_col5}
                  </th>
                  <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row2_col5}
                  </td>
                  <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row3_col5}
                  </td>
                </tr>
                <tr>
                  <th className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row1_col6}
                  </th>
                  <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row2_col6}
                  </td>
                  <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row3_col6}
                  </td>
                </tr>
                <tr>
                  <th className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row1_col7}
                  </th>
                  <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row2_col7}
                  </td>
                  <td className='border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center'>
                    {row3_col7}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default Table;

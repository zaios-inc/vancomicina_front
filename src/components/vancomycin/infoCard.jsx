import { CardRow, CardStatus, CardStatusFooter } from 'OLD-material-tailwind';
import { Card } from '@material-tailwind/react';
import { CardHeader } from '@material-tailwind/react';

function InfoCard({
  color,
  headerIcon,
  headerContent,
  title,
  amount,
  footerContent,
  footerContentColor,
}) {
  return (
    <div className='px-4 mb-28 z-10'>
      <Card className='shadow-xl shadow-[#1a237e]'>
        <CardRow>
          <CardHeader
            variant='gradient'
            className='grid place-content-center w-16 h-16 py-4 px-4 shadow-xl shadow-[#0097a7]'
            color={color}
          >
            <img src={headerIcon} />
            <div className='font-bold text-3xl text-white'>{headerContent}</div>
          </CardHeader>

          <div className='pt-2 text-center'>
            <CardStatus />
            <div className='text-[#0097a7] font-bold text-sm'>{title}</div>
            <div className='text-black pt-1'>
              <CardStatus amount={amount} />
            </div>
          </div>
        </CardRow>

        <div className='mx-auto pb-2'>
          <CardStatusFooter
            amount={footerContent}
            color={footerContentColor}
          >
          </CardStatusFooter>
        </div>
      </Card>
    </div>
  );
}

export default InfoCard;

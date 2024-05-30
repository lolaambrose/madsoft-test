import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Test from './components/Test';
import questions from './data/questions';

export default function App() {
   return (
      <>
         <CssBaseline />
         <Container maxWidth="sm">
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  minHeight: '90vh',
               }}
            >
               <Test questions={questions} time={60 * 10} />
            </Box>
         </Container>
      </>
   );
}

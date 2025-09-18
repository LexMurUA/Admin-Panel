import { Box, Button, Modal, ModalClose, ModalDialog, Typography } from '@mui/joy/';
import { UseUsersContext } from '../../context/users/context';
import { deleteUser } from '../../features/users/usersSlise';

export const ModalWindow = ({  componentModal }) => {
  const { modalStatus, setModalStatus,dispatch,selectedId } = UseUsersContext()
  
  const deleteUserModal = (id)=>{
    
    dispatch(deleteUser(id))
    setModalStatus(false)
  }
  return (
    <Modal slotProps={{
      backdrop: {
        sx: {
          backgroundColor: 'transparent', // светлый полупрозрачный
          backdropFilter: 'blur(3px)', // размытие фона (опционально)
        },
      },
    }} open={modalStatus} onClose={() => setModalStatus(false)}>
      <ModalDialog
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        color="neutral"
        layout="center"
        size="md"
        variant="outlined"
      >
        <ModalClose />
        
          {componentModal === 'forDelete' ? (
            <>
            <Typography level="h4">Видалити користувача?</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: 2 }}>
              <Button onClick={() => deleteUserModal(selectedId)} fullWidth color="success" size="md">Так</Button>
              <Button onClick={() => setModalStatus(false)} fullWidth color="danger" size="md">Ні</Button>
            </Box>
            </>
          )
          : (<Typography>sd</Typography>)}

        
      </ModalDialog>
    </Modal>
  )
}
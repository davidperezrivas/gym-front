import { Box, Grid } from '@mui/material';
import { PageHeader } from '@/ui/components/PageHeader/PageHeader';
import { Table } from '@/ui/components/Table/Table';
import { ActionButtons } from '../actions/Actions.table';
import type { ColDef } from 'ag-grid-community';
import { useState } from 'react';
import { StoryButton } from '@/ui/atoms/Button/Button';
import AddIcon from '@mui/icons-material/Add';
import { ExerciseModal } from './modals/upsert.modal';

export const Exercises = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleOpenCloseCreateModal = () => {
    setOpenCreateModal(false);
  };
  const columnDefs: ColDef[] = [
    { headerName: 'Nombre', field: 'name', flex: 1 },
    { headerName: 'Grupo muscular', field: 'muscleGroup', flex: 1 },
    {
      headerName: 'Acciones',
      field: 'actions',
      pinned: 'right',
      width: 120,
      cellRenderer: ActionButtons,
      sortable: false,
      filter: false,
    },
  ];

  const rowData = [
    { name: 'Sentadilla', muscleGroup: 'Piernas' },
    { name: 'Press banca', muscleGroup: 'Pecho' },
    { name: 'Dominadas', muscleGroup: 'Espalda' },
  ];

  return (
    <Grid
      container
      sx={{
        height: '100%', // ⬅️ importante
      }}
    >
      <Grid
        size={12}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%', // ⬅️ importante
        }}
      >
        <PageHeader
          title="Ejercicios"
          description="Espacio para poder añadir, editar o eliminar el listado de ejercicios"
        />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            mb: 2,
          }}
        >
          <StoryButton
            color="primary"
            text="Añadir"
            type="outlined"
            startIcon={<AddIcon />}
            onClick={handleOpenCreateModal}
          />
        </Box>
        <Table rowData={rowData} columnDefs={columnDefs} />

        <ExerciseModal open={openCreateModal} onClose={handleOpenCloseCreateModal} />
      </Grid>
    </Grid>
  );
};

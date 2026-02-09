import { Grid } from '@mui/material';

import { PageHeader } from '@/ui/components/PageHeader/PageHeader';
import { Table } from '@/ui/components/Table/Table';

export const Exercises = () => {
  const columnDefs = [
    { headerName: 'Nombre', field: 'name', flex: 1 },
    { headerName: 'Grupo muscular', field: 'muscleGroup', flex: 1 },
    { headerName: 'Nivel', field: 'level', width: 120 },
  ];

  const rowData = [
    { name: 'Sentadilla', muscleGroup: 'Piernas', level: 'Básico' },
    { name: 'Press banca', muscleGroup: 'Pecho', level: 'Intermedio' },
    { name: 'Dominadas', muscleGroup: 'Espalda', level: 'Avanzado' },
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

        <Table rowData={rowData} columnDefs={columnDefs} />
      </Grid>
    </Grid>
  );
};

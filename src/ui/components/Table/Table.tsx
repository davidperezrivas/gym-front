import { Box, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import type { Props } from './props/Props';
import { AgGridReact } from 'ag-grid-react';
import SearchIcon from '@mui/icons-material/Search';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { StoryButton } from '../../atoms/Button/Button';
import AddIcon from '@mui/icons-material/Add';

export const Table = ({ rowData, columnDefs }: Props) => {
  const [filterText, setFilterText] = useState('');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2,
        }}
      >
        {/* Input de búsqueda */}
        <TextField
          size="small"
          label="Buscar"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          sx={{ maxWidth: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />

        <StoryButton
          color="primary"
          text="Añadir"
          type="outlined"
          startIcon={<AddIcon />}
          onClick={() => {
            console.log('');
          }}
        />
      </Box>

      {/* Tabla */}
      <Box
        className="ag-theme-quartz"
        sx={{
          flex: 1,
          minHeight: 500,
        }}
      >
        <AgGridReact
          theme={'legacy'}
          rowData={rowData}
          columnDefs={columnDefs}
          quickFilterText={filterText}
          rowSelection="single"
          animateRows
        />
      </Box>
    </Box>
  );
};

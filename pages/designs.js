/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import grey from '@material-ui/core/colors/grey';
import clsx from 'clsx';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import HourGlassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import MuiDataTable from 'mui-datatables';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router';
import { API } from 'aws-amplify';
import PropTypes from 'prop-types';
import DataTable from '../components/DataTable';
import CustomToolbar from '../components/CustomToolbar';
import { useCreateDialogsContext } from '../context/create-dialogs-context';

const DesignList = ({ classes }) => {
  const router = useRouter();
  const { setIsCreateDesignOpen } = useCreateDialogsContext();

  const columns = [
    {
      name: 'Name',
      options: {
        filter: true,
        // display: 'excluded',
      },
    },
    {
      name: 'Design ID',
      options: {
        filter: true,
      },
    },
    {
      name: 'Organization',
      options: {
        filter: false,
      },
    },
    {
      name: 'Designer',
      options: {
        filter: true,
      },
    },
    {
      name: 'Created',
      options: {
        filter: true,
      },
    },
    {
      name: 'Expires',
      options: {
        filter: true,
      },
    },
    {
      name: 'Favorites',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Target',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Status',
      options: {
        filter: true,
      },
    },
    {
      name: 'Orders',
      options: {
        filter: true,
      },
    },
  ];

  const data = [
    [
      'Gabby George',
      'Business Analyst',
      'Minneapolis',
      30,
      '$100,000',
      '$100,000',
      '$100,000',
    ],
    [
      'Aiden Lloyd',
      'Business Consultant',
      'Dallas',
      55,
      '$200,000',
      '$200,000',
      '$200,000',
    ],
    [
      'Jaden Collins',
      'Attorney',
      'Santa Ana',
      27,
      '$500,000',
      '$500,000',
      '$500,000',
    ],
    [
      'Franky Rees',
      'Business Analyst',
      'St. Petersburg',
      22,
      '$50,000',
      '$50,000',
      '$50,000',
    ],
    [
      'Aaren Rose',
      'Business Consultant',
      'Toledo',
      28,
      '$75,000',
      '$75,000',
      '$75,000',
    ],
    [
      'Blake Duncan',
      'Business Management Analyst',
      'San Diego',
      65,
      '$94,000',
      '$94,000',
      '$94,000',
    ],
    [
      'Frankie Parry',
      'Agency Legal Counsel',
      'Jacksonville',
      71,
      '$210,000',
      '$210,000',
      '$210,000',
    ],
    [
      'Lane Wilson',
      'Commercial Specialist',
      'Omaha',
      19,
      '$65,000',
      '$65,000',
      '$65,000',
    ],
    [
      'Robin Duncan',
      'Business Analyst',
      'Los Angeles',
      20,
      '$77,000',
      '$77,000',
      '$77,000',
    ],
    [
      'Mel Brooks',
      'Business Consultant',
      'Oklahoma City',
      37,
      '$135,000',
      '$135,000',
      '$135,000',
    ],
    [
      'Harper White',
      'Attorney',
      'Pittsburgh',
      52,
      '$420,000',
      '$420,000',
      '$420,000',
    ],
    [
      'Kris Humphrey',
      'Agency Legal Counsel',
      'Laredo',
      30,
      '$150,000',
      '$150,000',
      '$150,000',
    ],
    [
      'Frankie Long',
      'Industrial Analyst',
      'Austin',
      31,
      '$170,000',
      '$170,000',
      '$170,000',
    ],
    [
      'Brynn Robbins',
      'Business Analyst',
      'Norfolk',
      22,
      '$90,000',
      '$90,000',
      '$90,000',
    ],
    [
      'Justice Mann',
      'Business Consultant',
      'Chicago',
      24,
      '$133,000',
      '$133,000',
      '$133,000',
    ],
    [
      'Addison Navarro',
      'Business Management Analyst',
      'New York',
      50,
      '$295,000',
      '$295,000',
      '$295,000',
    ],
    [
      'Jesse Welch',
      'Agency Legal Counsel',
      'Seattle',
      28,
      '$200,000',
      '$200,000',
      '$200,000',
    ],
    [
      'Eli Mejia',
      'Commercial Specialist',
      'Long Beach',
      65,
      '$400,000',
      '$400,000',
      '$400,000',
    ],
    [
      'Gene Leblanc',
      'Industrial Analyst',
      'Hartford',
      34,
      '$110,000',
      '$110,000',
      '$110,000',
    ],
    [
      'Danny Leon',
      'Computer Scientist',
      'Newark',
      60,
      '$220,000',
      '$220,000',
      '$220,000',
    ],
    [
      'Lane Lee',
      'Corporate Counselor',
      'Cincinnati',
      52,
      '$180,000',
      '$180,000',
      '$180,000',
    ],
    [
      'Jesse Hall',
      'Business Analyst',
      'Baltimore',
      44,
      '$99,000',
      '$99,000',
      '$99,000',
    ],
    [
      'Danni Hudson',
      'Agency Legal Counsel',
      'Tampa',
      37,
      '$90,000',
      '$90,000',
      '$90,000',
    ],
    [
      'Terry Macdonald',
      'Commercial Specialist',
      'Miami',
      39,
      '$140,000',
      '$140,000',
      '$140,000',
    ],
    [
      'Justice Mccarthy',
      'Attorney',
      'Tucson',
      26,
      '$330,000',
      '$330,000',
      '$330,000',
    ],
    [
      'Silver Carey',
      'Computer Scientist',
      'Memphis',
      47,
      '$250,000',
      '$250,000',
      '$250,000',
    ],
    [
      'Franky Miles',
      'Industrial Analyst',
      'Buffalo',
      49,
      '$190,000',
      '$190,000',
      '$190,000',
    ],
    [
      'Glen Nixon',
      'Corporate Counselor',
      'Arlington',
      44,
      '$80,000',
      '$80,000',
      '$80,000',
    ],
    [
      'Gabby Strickland',
      'Business Process Consultant',
      'Scottsdale',
      26,
      '$45,000',
      '$45,000',
      '$45,000',
    ],
    [
      'Mason Ray',
      'Computer Scientist',
      'San Francisco',
      39,
      '$142,000',
      '$142,000',
      '$142,000',
    ],
  ];

  const CustomToolBarSelect = (selectedRows, displayData, setSelectedRows) => {
    return (
      <div className={classes.toolTips}>
        {/* <Tooltip title="Change Status">
          <Button
            variant="contained"
            className={clsx(classes.button)}
            onClick={() => console.log('Change Status')}
            aria-label="Change Status"
            startIcon={<HourGlassEmptyIcon />}
          >
            Change Status
          </Button>
        </Tooltip>
        <Tooltip title="Delete">
          <Button
            variant="contained"
            className={clsx(classes.button)}
            onClick={() => console.log('Delete')}
            aria-label="Delete"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Tooltip> */}
      </div>
    );
  };

  const customToolBar = () => <CustomToolbar />;

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'scrollFullHeight',
    customToolbarSelect: CustomToolBarSelect,
    fixedHeaderOptions: {
      xAxis: false,
      yAxis: true,
    },
    rowsPerPage: 15,
    customToolbar: customToolBar,
    // pagination: false,
  };

  return (
    <div className={classes.root}>
      {/* <div className={classes.tableContainer}>
        <div className={classes.table}>
          <MuiDataTable
            title="Design List"
            data={data}
            columns={columns}
            options={options}
          />
        </div>
      </div> */}
    </div>
  );
};

DesignList.defaultProps = {
  stackOverflowUrl: '',
  githubUrl: '',
  spectrumUrl: '',
  twitterUrl: '',
  profileData: {},
  generatedKey: '',
};

DesignList.propTypes = {
  stackOverflowUrl: PropTypes.string,
  githubUrl: PropTypes.string,
  spectrumUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
  profileData: PropTypes.shape({
    stackOverflow: PropTypes.array,
  }),
  generatedKey: PropTypes.string,
};

export default withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: grey[400],
  },
  tableContainer: {
    width: '100%',
    // alignSelf: 'center',
    display: 'flex',
    // justifyContent: 'center',
  },
  table: {
    width: '100%',
    height: '80%',
  },
  toolTips: {},
  deleteIcon: {
    color: theme.palette.error.main,
  },
  progressIcon: {
    color: theme.palette.warning.light,
  },
  button: {
    marginRight: theme.spacing(1),
  },
}))(DesignList);

import React from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import ComputerIcon from '@mui/icons-material/Computer';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ConstructionIcon from '@mui/icons-material/Construction';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

export const sectorDetails = {
  'Government': {
    icon: <AccountBalanceIcon style={{ fontSize: 56 }} />,
    healthScore: 95,
    totalCustomers: 5,
    revenue: 55000,
    growthData: [
      { name: 'Jan', customers: 1 },
      { name: 'Feb', customers: 2 },
      { name: 'Mar', customers: 3 },
      { name: 'Apr', customers: 4 },
      { name: 'May', customers: 5 },
    ],
  },
  'Oil & Gas': {
    icon: <LocalGasStationIcon style={{ fontSize: 56 }} />,
    healthScore: 88,
    totalCustomers: 5,
    revenue: 78000,
    growthData: [
      { name: 'Jan', customers: 1 },
      { name: 'Feb', customers: 2 },
      { name: 'Mar', customers: 3 },
      { name: 'Apr', customers: 4 },
      { name: 'May', customers: 5 },
    ],
  },
  'Telecom': {
    icon: <NetworkCheckIcon style={{ fontSize: 56 }} />,
    healthScore: 92,
    totalCustomers: 4,
    revenue: 62000,
    growthData: [
      { name: 'Jan', customers: 1 },
      { name: 'Feb', customers: 2 },
      { name: 'Mar', customers: 3 },
      { name: 'Apr', customers: 4 },
      { name: 'May', customers: 4 },
    ],
  },
  'IT & Data Centers': {
    icon: <ComputerIcon style={{ fontSize: 56 }} />,
    healthScore: 98,
    totalCustomers: 5,
    revenue: 48000,
    growthData: [
      { name: 'Jan', customers: 1 },
      { name: 'Feb', customers: 2 },
      { name: 'Mar', customers: 3 },
      { name: 'Apr', customers: 4 },
      { name: 'May', customers: 5 },
    ],
  },
  'Banking & Finance': {
    icon: <AccountBalanceWalletIcon style={{ fontSize: 56 }} />,
    healthScore: 90,
    totalCustomers: 5,
    revenue: 95000,
    growthData: [
      { name: 'Jan', customers: 1 },
      { name: 'Feb', customers: 2 },
      { name: 'Mar', customers: 3 },
      { name: 'Apr', customers: 4 },
      { name: 'May', customers: 5 },
    ],
  },
  'Hospitality & Tourism': {
    icon: <ApartmentIcon style={{ fontSize: 56 }} />,
    healthScore: 85,
    totalCustomers: 5,
    revenue: 42000,
    growthData: [
      { name: 'Jan', customers: 1 },
      { name: 'Feb', customers: 2 },
      { name: 'Mar', customers: 3 },
      { name: 'Apr', customers: 4 },
      { name: 'May', customers: 5 },
    ],
  },
  'Logistics & Transport': {
    icon: <LocalShippingIcon style={{ fontSize: 56 }} />,
    healthScore: 89,
    totalCustomers: 5,
    revenue: 51000,
    growthData: [
      { name: 'Jan', customers: 1 },
      { name: 'Feb', customers: 2 },
      { name: 'Mar', customers: 3 },
      { name: 'Apr', customers: 4 },
      { name: 'May', customers: 5 },
    ],
  },
  'Education': {
    icon: <SchoolIcon style={{ fontSize: 56 }} />,
    healthScore: 94,
    totalCustomers: 5,
    revenue: 29000,
    growthData: [
      { name: 'Jan', customers: 1 },
      { name: 'Feb', customers: 2 },
      { name: 'Mar', customers: 3 },
      { name: 'Apr', customers: 4 },
      { name: 'May', customers: 5 },
    ],
  },
  'Healthcare': {
    icon: <LocalHospitalIcon style={{ fontSize: 56 }} />,
    healthScore: 91,
    totalCustomers: 5,
    revenue: 47000,
    growthData: [
      { name: 'Jan', customers: 1 },
      { name: 'Feb', customers: 2 },
      { name: 'Mar', customers: 3 },
      { name: 'Apr', customers: 4 },
      { name: 'May', customers: 5 },
    ],
  },
};

export const sectors = Object.keys(sectorDetails).map(key => ({
  label: key,
  icon: sectorDetails[key].icon,
})); 
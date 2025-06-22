import React from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import ComputerIcon from '@mui/icons-material/Computer';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ApartmentIcon from '@mui/icons-material/Apartment';

export const sectorDetails = {
  'Government': {
    icon: <AccountBalanceIcon style={{ fontSize: 56 }} />,
    healthScore: 95,
    totalCustomers: 450,
    revenue: 55000,
    growthData: [
      { name: 'Jan', customers: 280 },
      { name: 'Feb', customers: 310 },
      { name: 'Mar', customers: 350 },
      { name: 'Apr', customers: 400 },
      { name: 'May', customers: 450 },
    ],
  },
  'Oil & Gas': {
    icon: <LocalGasStationIcon style={{ fontSize: 56 }} />,
    healthScore: 88,
    totalCustomers: 150,
    revenue: 78000,
    growthData: [
      { name: 'Jan', customers: 100 },
      { name: 'Feb', customers: 110 },
      { name: 'Mar', customers: 120 },
      { name: 'Apr', customers: 135 },
      { name: 'May', customers: 150 },
    ],
  },
  'Telecom': {
    icon: <NetworkCheckIcon style={{ fontSize: 56 }} />,
    healthScore: 92,
    totalCustomers: 300,
    revenue: 62000,
    growthData: [
      { name: 'Jan', customers: 200 },
      { name: 'Feb', customers: 220 },
      { name: 'Mar', customers: 250 },
      { name: 'Apr', customers: 280 },
      { name: 'May', customers: 300 },
    ],
  },
  'IT & Data Centers': {
    icon: <ComputerIcon style={{ fontSize: 56 }} />,
    healthScore: 98,
    totalCustomers: 250,
    revenue: 48000,
    growthData: [
      { name: 'Jan', customers: 150 },
      { name: 'Feb', customers: 180 },
      { name: 'Mar', customers: 200 },
      { name: 'Apr', customers: 220 },
      { name: 'May', customers: 250 },
    ],
  },
  'Banking & Finance': {
    icon: <AccountBalanceWalletIcon style={{ fontSize: 56 }} />,
    healthScore: 90,
    totalCustomers: 200,
    revenue: 95000,
    growthData: [
      { name: 'Jan', customers: 130 },
      { name: 'Feb', customers: 150 },
      { name: 'Mar', customers: 170 },
      { name: 'Apr', customers: 190 },
      { name: 'May', customers: 200 },
    ],
  },
  'Hospitality & Tourism': {
    icon: <ApartmentIcon style={{ fontSize: 56 }} />,
    healthScore: 85,
    totalCustomers: 158,
    revenue: 42000,
    growthData: [
      { name: 'Jan', customers: 90 },
      { name: 'Feb', customers: 105 },
      { name: 'Mar', customers: 120 },
      { name: 'Apr', customers: 140 },
      { name: 'May', customers: 158 },
    ],
  },
};

export const sectors = Object.keys(sectorDetails).map(key => ({
  label: key,
  icon: sectorDetails[key].icon,
})); 
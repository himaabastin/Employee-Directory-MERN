import { axiosHomeInstance } from '../axios';

export const employeeProfiles = async () => {
    try {
      const config = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
      };
      const { data } = await axiosHomeInstance.get(
        '/employeeProfiles',
        config
      );
      return data;
      
    } catch (error) {
      return error;
    }
  };

  
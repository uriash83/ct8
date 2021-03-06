import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useTheme} from '@material-ui/core/styles';

function WithTheme() {
    const theme = useTheme();
    const primaryText = theme.palette.text.primary;
    const primaryColor = theme.palette.secondary.main;
  
    const styles = {
      primaryText: {
        backgroundColor: theme.palette.primary.dark,
        padding: theme.spacing(1, 2),
        color: primaryText,
      },
      primaryColor: {
        backgroundColor: primaryColor,
        padding: theme.spacing(1, 2),
        color: theme.palette.common.white,
      },
    };
  
    return (
      <div style={{ width: 300 }}>
        <Typography style={styles.primaryColor}>{`Primary color ${primaryColor}`}</Typography>
        <Typography style={styles.primaryText}>{`Primary text ${primaryText}`}</Typography>
      </div>
    );
  }

const RunningStats = () => {
    return(
        <div className="container">
            <WithTheme/>
        </div>
            
           
    );
}

export default RunningStats;
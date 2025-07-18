import React from 'react';
import { Typography, Grid2, Box, List, ListItem, RenderMarkdown } from '@sistent/sistent';
import { FormatStructuredData } from '../../DataFormatter';

export const ErrorMetadataFormatter = ({ metadata, event }) => {
  const longDescription = metadata?.LongDescription || [];
  const probableCause = metadata?.ProbableCause || [];
  const suggestedRemediation = metadata?.SuggestedRemediation || [];
  const ErrorDetailsObjectFormatter = ({ heading, value }) => {
    const isUnorderedList = heading === 'Details' && value.length <= 1;
    return (
      <Box>
        <Typography variant="body1">
          <strong>{heading}</strong>
        </Typography>
        <List
          sx={{
            listStyleType: isUnorderedList ? 'none' : 'decimal',
            pl: 3,
          }}
        >
          {value.map((error, idx) => {
            const hashedError = error.trim().startsWith('-');
            return (
              <ListItem
                key={idx}
                sx={{
                  display: hashedError ? 'block' : 'list-item',
                  lineHeight: '1.2rem',
                  padding: '0',
                  pb: 1,
                  '& ul': { paddingInlineStart: hashedError ? '20px' : '0px' },
                  '& p': { lineHeight: '1.2rem' },
                }}
              >
                <RenderMarkdown content={error} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    );
  };
  return (
    <Grid2 size="grow">
      {' '}
      <div>
        {event?.description && <FormatStructuredData data={event.description} />}
        <div style={{ marginTop: '1rem' }}>
          <FormatStructuredData
            data={{
              Details: longDescription,
            }}
            propertyFormatters={{
              Details: (value) => <ErrorDetailsObjectFormatter heading="Details" value={value} />,
            }}
          />
        </div>
      </div>
      <Grid2 container spacing={1} style={{ marginTop: '0.5rem' }} size="grow">
        <Grid2 size={{ sm: probableCause?.length > 0 ? 6 : 12 }}>
          <FormatStructuredData
            data={{
              'Probable Cause': probableCause,
            }}
            propertyFormatters={{
              'Probable Cause': (value) => (
                <ErrorDetailsObjectFormatter heading="Probable Cause" value={value} />
              ),
            }}
          />
        </Grid2>
        <Grid2 size={{ sm: suggestedRemediation?.length > 0 ? 6 : 12 }}>
          <FormatStructuredData
            data={{
              'Suggested Remediation': suggestedRemediation,
            }}
            propertyFormatters={{
              'Suggested Remediation': (value) => (
                <ErrorDetailsObjectFormatter heading="Suggested Remediation" value={value} />
              ),
            }}
          />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

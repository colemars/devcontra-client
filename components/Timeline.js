/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import moment from 'moment';
// import * as d3Other from 'd3';
// import d3 from '../src/d3Timeline';
// import d3 from 'd3-layout-timeline';
import d3 from 'd3-layout-timeline-api';
import dummyData from '../dummy';

const Timeline = () => {
  const now = moment().utc();
  const colorMap = {
    stackoverflow: '#F48024',
    spectrum: '#7B16FF',
    twitter: '#1DA1F2',
    github: '#24292E',
  };
  const variantMap = ['stackoverflow', 'github'];

  const newDummyStack = new Map();
  for (let i = 16; i >= 0; i -= 1) {
    const weekStart = now
      .clone()
      .subtract(i, 'weeks')
      .startOf('week')
      .unix();
    newDummyStack.set(weekStart, {
      children: [
        { platform: 'stackoverflow', s: 0, e: 0 },
        { platform: 'github', s: 0, e: 0 },
        { platform: 'twitter', s: 0, e: 0 },
        { platform: 'spectrum', s: 0, e: 0 },
      ],
    });
  }

  // eslint-disable-next-line guard-for-in
  for (const platform in dummyData) {
    // eslint-disable-next-line no-undef
    dummyData[platform].map(item => {
      const { activityDate, variant } = item;
      const newVal = newDummyStack.get(activityDate);
      newVal.children.forEach((child, i) => {
        if (child.platform === variant) {
          const precedingPlatform = newVal.children[i - 1];
          child.color = colorMap[variant];
          child.plainDate = moment.unix(activityDate);
          if (precedingPlatform && child.e === 0) {
            child.s = precedingPlatform.e + 1;
            child.e = child.s + 1;
          } else child.e += 1;
        }
      });
      newDummyStack.set(activityDate, newVal);
      return item;
    });
  }

  console.log(newDummyStack);

  // dummyData.stackOverflow.map(item => {
  //   // console.log(item);
  //   const { activityDate, variant } = item;
  //   const newVal = newDummyStack.get(activityDate);
  //   newVal.children.forEach(child => {
  //     if (child.platform === variant) {
  //       child.e += 1;
  //       child.color = colorMap[variant];
  //       child.plainDate = moment.unix(activityDate);
  //     }
  //   });
  //   newDummyStack.set(activityDate, newVal);
  //   return item;
  // });

  // dummyData.github.map(item => {
  //   // console.log(item);
  //   const { activityDate, variant } = item;
  //   const newVal = newDummyStack.get(activityDate);
  //   newVal.children.forEach(child => {
  //     if (child.platform === variant) {
  //       child.e += 1;
  //       child.color = colorMap[variant];
  //       child.plainDate = moment.unix(activityDate);
  //     }
  //   });
  //   newDummyStack.set(activityDate, newVal);
  //   return item;
  // });

  console.log(newDummyStack);

  const newDummyData = [];
  // eslint-disable-next-line no-unused-vars
  for (const item of newDummyStack.values()) {
    newDummyData.push(item);
  }

  const testData = [
    {
      s: 0,
      e: 22,
      color: 'yellow',
    },
    {
      s: 0,
      e: 22,
      color: 'green',
    },
    {
      s: 0,
      e: 10,
      color: '#F48024',
      plainDate: '2019-06-02T00:00:00.000Z',
    },
    {
      s: 0,
      e: 5,
      color: '#F48024',
      plainDate: '2019-06-09T00:00:00.000Z',
    },
    {
      s: 0,
      e: 2,
      color: '#F48024',
      plainDate: '2019-06-16T00:00:00.000Z',
    },
    {
      s: 0,
      e: 0,
    },
    {
      s: 0,
      e: 0,
    },
    {
      s: 0,
      e: 0,
    },
    {
      s: 0,
      e: 0,
    },
    {
      s: 0,
      e: 8,
      color: '#F48024',
      plainDate: '2019-07-21T00:00:00.000Z',
    },
    {
      s: 0,
      e: 4,
      color: '#F48024',
      plainDate: '2019-07-28T00:00:00.000Z',
    },
    {
      s: 0,
      e: 8,
      color: '#F48024',
      plainDate: '2019-08-04T00:00:00.000Z',
    },
    {
      s: 0,
      e: 11,
      color: '#F48024',
      plainDate: '2019-08-11T00:00:00.000Z',
    },
    {
      s: 0,
      e: 2,
      color: '#F48024',
      plainDate: '2019-08-18T00:00:00.000Z',
    },
    {
      s: 0,
      e: 1,
      color: '#F48024',
      plainDate: '2019-08-25T00:00:00.000Z',
    },
    {
      s: 0,
      e: 1,
      color: '#F48024',
      plainDate: '2019-09-01T00:00:00.000Z',
    },
    {
      s: 0,
      e: 2,
      color: '#F48024',
      plainDate: '2019-09-08T00:00:00.000Z',
    },
  ];

  const timeline = d3.layout
    .timeline()
    .size([800, 240])
    .bandStart(d => {
      return d.s;
    })
    .bandEnd(d => {
      return d.e;
    })
    .dateFormat(d => {
      return parseInt(d, 10);
    })
    .childAccessor(d => {
      return d.children;
    })
    .padding(2)
    .extent([0, 880])
    .maxBandHeight(9);

  const addData = () => {
    const arc = d3.svg.arc();
    const timelineBands = timeline(newDummyData);
    // console.log(timelineBands);
    const angleScale = d3.scale
      .linear()
      .domain([0, 40])
      .range([0, 2 * Math.PI]);
    timelineBands.forEach(d => {
      d.startAngle = angleScale(d.start);
      d.endAngle = angleScale(d.end);
      d.y += 30;
    });

    d3.select('svg')
      .selectAll('path')
      .data(timelineBands)
      .enter()
      .append('path')
      .attr('transform', 'translate(175,175)')
      .style('fill-opacity', 0)
      .attr('d', d => {
        return arc.innerRadius(10).outerRadius(d.dy + 10)(d);
      });

    const size = timelineBands.length;

    d3.selectAll('path')
      .transition()
      .duration(400)
      .attr('d', d => {
        const { y, dy } = d;
        return arc.innerRadius(y).outerRadius(y + dy)(d);
      })
      .attr('x', d => {
        return d.start;
      })
      .attr('y', d => {
        return d.y;
      })
      .attr('height', d => {
        return d.dy;
      })
      .attr('width', d => {
        return d.end - d.start;
      })
      .style('fill', d => d.color || 'rgba(0,0,0,0)')
      .style('fill-opacity', (d, i) => {
        return Math.max(0.05, 1 - (size - i) * 0.01);
      });
  };

  useEffect(() => {
    addData();
  });

  return (
    <div id="viz" height={50} width={50}>
      <svg height={350} width={350} />
    </div>
  );
};
export default Timeline;

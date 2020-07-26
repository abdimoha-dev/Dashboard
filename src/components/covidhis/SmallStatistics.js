import React, { Component } from 'react'
import { Row, Col } from 'shards-react';
import SmallStats from '../common/SmallStats'

class SmallStatistics extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            
            <Row>
                {this.props.smallStats.map((stats, idx) => (

                    <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
                    <SmallStats 
                    id={`small-stats-${idx}`}
                            variation="1"
                            chartData={stats.datasets}
                            chartLabels={stats.chartLabels}
                            label={stats.label}
                            value={stats.value}
                            percentage={stats.percentage}
                            increase={stats.increase}
                            decrease={stats.decrease}/>
                
                    </Col>
                ))}
            </Row>
        )
    }
}
export default SmallStatistics

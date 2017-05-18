import * as React from 'react';
import { connect } from 'react-redux';

interface TextBoxProps {
    id?: string;
    placeholder?: string;
    className?: string;
    label?: JSX.Element | string;
    value: any;
    onChange: (value) => void;
}

export default class FieldText extends  React.Component<TextBoxProps, any> {

    private fieldType = "text";

    render() {

        const label = this.props.label ? 
            <label htmlFor={this.props.id}>{this.props.label}</label> 
            : null;

        return (
            <div className="form-group">
                {label}
                <input type={this.fieldType} 
                        value={this.props.value}
                        onChange={this.props.onChange}
                        className={['form-control', this.props.className].join(' ')} 
                        id={this.props.id} 
                        placeholder={this.props.placeholder} />
            </div>
        );
    }

}

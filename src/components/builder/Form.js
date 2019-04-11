import React,{ Component } from "react";

import FormActionsContainer from "./../../containers/builder/FormActionsContainer";
import SchemaField from "react-jsonschema-form/lib/components/fields/SchemaField";
import { getDefaultRegistry } from "react-jsonschema-form/lib/utils";

export default class Form extends Component {

  constructor(props) {
    super(props);
  }

  getRegistry() {
    // For BC, accept passed SchemaField and TitleField props and pass them to
    // the "fields" registry one.
    const { fields, widgets } = getDefaultRegistry();
    return {
      fields: { ...fields, ...this.props.fields },
      widgets: { ...widgets, ...this.props.widgets },
      ArrayFieldTemplate: this.props.ArrayFieldTemplate,
      ObjectFieldTemplate: this.props.ObjectFieldTemplate,
      FieldTemplate: this.props.FieldTemplate,
      definitions: this.props.schema.definitions || {},
      formContext: this.props.formContext || {},
    };
  }


  render() {

    const registry = this.getRegistry();

    // const registry = {
    //   ...SchemaField.defaultProps.registry,
    //   fields: {
    //     ...SchemaField.defaultProps.registry.fields,
    //     SchemaField: props.SchemaField,
    //     TitleField: props.TitleField,
    //     DescriptionField: props.DescriptionField,
    //   }
    // };
    const { error, dragndropStatus } = this.props;
    console.log("dragndropstatus", dragndropStatus);
    console.log('registry props is' + JSON.stringify(registry) + 'this.props from schemafield' + JSON.stringify(this.props));

    return (
      <div>
        {error ? <div className="alert alert-danger">{error}</div> : <div />}
        <div className="rjsf builder-form">
          <SchemaField {...this.props} registry={registry} />
        </div>

        <FormActionsContainer {...this.props} />
      </div>
    );
  }

}

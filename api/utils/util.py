
class Util:

    def get_relation_instance(self, validated_data, model, field_relation, class_name_representation='name'):
        """
        params: 
        validated_data => this params receive request body.
        model => receive class model relation.
        field_relation => field referenced inside the request dict, string type.
        class_name_representation = Receive a string name that relational class using __str__ method return.
        """

        validated_data_copy = validated_data.copy()
        model_instance = model.objects.filter(
            name=validated_data.get(field_relation).get(class_name_representation))[0]
        validated_data_copy[field_relation] = model_instance
        return validated_data_copy

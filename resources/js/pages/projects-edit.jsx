/**
 * External dependencies.
 */
import { Link } from '@inertiajs/react';
import { Rocket } from 'lucide-react';

/**
 * Internal dependencies.
 */
import Text from '@/components/text/text';
import Input from '@/components/input/input';
import Button from '@/components/button/button';
import Layout from '@/components/layout/layout';
import useForm from '@/hooks/use-form';
import { VStack, HStack } from '@/components/stack/stack';

const ProjectsEdit = ({ project }) => {
    const { put, data, errors, processing, handleOnChange } = useForm({
        name: project.name,
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        put(`/projects/${project.slug}/update`);
    };

    return (
        <Layout>
            <form onSubmit={handleOnSubmit}>
                <VStack gap={24} align="center">
                    <Text as="h2" size="24" align="center">
                        <HStack gap={4} align="center" justify="center">
                            Edit your Project {project.name}{' '}
                            <Rocket size={32} />
                        </HStack>
                    </Text>

                    <div className="form">
                        <VStack gap={24}>
                            <Input
                                name="name"
                                value={data.name}
                                error={errors.name}
                                onChange={handleOnChange}
                                placeholder="Name your project"
                            />

                            <HStack gap={40}>
                                <Link
                                    href="/projects"
                                    className="button button--red"
                                >
                                    Cancel
                                </Link>

                                <Button
                                    type="submit"
                                    color="blue"
                                    disabled={processing}
                                >
                                    Update
                                </Button>
                            </HStack>
                        </VStack>
                    </div>
                </VStack>
            </form>
        </Layout>
    );
};

export default ProjectsEdit;

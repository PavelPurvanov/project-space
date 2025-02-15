/**
 * External dependencies.
 */
import { Link } from '@inertiajs/react';
import { PencilRuler } from 'lucide-react';

/**
 * Internal dependencies.
 */
import Layout from '@/components/layout/layout';
import { HStack } from '@/components/stack/stack';

const Projects = ({ projects }) => {
    return (
        <Layout>
            <div className="projects">
                {projects.map((project) => (
                    <div key={project.slug} className="projects__item">
                        <HStack>
                            <Link href="/roadmap">{project.name}</Link>
                        </HStack>
                        <HStack>
                            <button type="button">
                                <PencilRuler color="#0c3d51" />
                            </button>
                        </HStack>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Projects;
